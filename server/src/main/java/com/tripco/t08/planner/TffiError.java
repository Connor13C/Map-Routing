package com.tripco.t08.planner;

import java.io.ByteArrayOutputStream;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;

public class TffiError {
    private String type = "error";
    private int version = 3;
    private int code = 101;
    private String message;
    private String debug;

    public TffiError(String message, Exception e) {
        this.message =message;
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        e.printStackTrace(new PrintWriter(baos, true));
        this.debug = new String(baos.toByteArray(), StandardCharsets.UTF_8);
    }
}
