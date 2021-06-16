import { VALID_USERS } from './../../../userLogins';
import { expect } from 'chai';
import { NextFunction, Request, Response } from 'express';
import authMiddleware from '../../../middleware/auth.middleware';
import { UserModel } from './../../../models/user.model';
import httpMocks from 'node-mocks-http';
import sinon from 'sinon';

describe('auth middleware', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction = sinon.spy();

  beforeEach(() => {
    mockRequest = httpMocks.createRequest();
    mockResponse = httpMocks.createResponse();
  });

  it('should populate req.user with the payload of a valid JWT', () => {
    const user: UserModel = VALID_USERS[0];

    const data = `${user.userLogin}:${user.password}`;
    const buff = Buffer.from(data);
    const encodedData = buff.toString('base64');

    mockRequest = {
      headers: {
        authorization: `BASIC ${encodedData}`
      },
    };

    authMiddleware.verifyUserPassword(mockRequest as Request, mockResponse as Response, nextFunction);
    expect(mockResponse.statusCode).to.be.equal(200);
  });
});