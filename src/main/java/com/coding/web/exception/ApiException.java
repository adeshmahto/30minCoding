package com.coding.web.exception;

public class ApiException extends RuntimeException{

    public ApiException(String message, Exception exception) {
        super(message, exception);
    }

    public ApiException(String message) {
        super(message);
    }

    public ApiException() {
        super();
    }


}