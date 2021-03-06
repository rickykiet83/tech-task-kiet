# Hands on tech lab

Welcome to the *86 400* tech lab! This repository represents a small piece of the *86 400* code base. The intent of this lab is to provide an opportunity to get an insight into one's coding style, ability and thought process - also as an opportunity to learn from each other!

## About

A simple express project with an endpoint that requires an implementation of a Basic Authentication validation for incoming HTTP calls.

The definition of the Basic Authentication scheme is that a value in the format of `Basic <credentials>` is passed as the value to the `authorization` header of a request. Where *credentials* is in the format of a base 64 encoded string using the values of the `username` and `password` joined using the `:` character. The `username` and `password` can not contain the `:` character and that the header value must start with the word `Basic`.

In this exercise, implement the functionality to authorise a request based on whether a request contains a valid user's credentials based on the list of users as defined in `src/userLogins.ts`. If the credentials are invalid then the request is expected to return a HTTP status with `401`.

# Getting started

* Run `npm install`
* Run `npm run test`
* Check tests that are failing and trouble shoot what needs to be fixed in the application code