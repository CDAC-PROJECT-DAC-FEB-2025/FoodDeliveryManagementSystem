package com.example.foodapp.custom_exception;

@SuppressWarnings("serial")
public class ApiException extends RuntimeException {
	public ApiException(String ErrMsg) {
		super(ErrMsg);
	}
}
