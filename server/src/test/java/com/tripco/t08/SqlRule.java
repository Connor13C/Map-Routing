package com.tripco.t08;

import com.tripco.t08.util.SqlUtils;
import org.jdbi.v3.core.Jdbi;
import org.junit.Assert;
import org.junit.rules.TestRule;
import org.junit.runner.Description;
import org.junit.runners.model.Statement;

import java.io.IOException;

/**
 * SqlRule is a test modification class.
 * It provides a {@link Jdbi} instance for
 * testing and skips tests if a database connection
 * cannot be made.
 */
public class SqlRule implements TestRule {
    private Jdbi jdbi;

    private boolean setup() throws Exception {
        jdbi = SqlUtils.getJdbi();
        return jdbi != null;
    }

    private void cleanup() {
        jdbi = null;
    }

    /**
     * Executes a .sql file from src/main/resources or src/test/resources.
     *
     * @param file the file path relative to the resource directory.
     */
    public void executeScript(String file) {
        try {
            jdbi.useHandle(SqlUtils.executeFiles(file));
        } catch (IOException e) {
            e.printStackTrace();
            Assert.fail(e.getMessage());
        }
    }

    public Jdbi getJdbi() {
        return jdbi;
    }

    public <T> T onDemand(Class<T> tClass) {
        return jdbi.onDemand(tClass);
    }

    @Override
    public Statement apply(Statement statement, Description description) {
        return new Statement() {
            @Override
            public void evaluate() throws Throwable {
                if (!System.getProperty("user.name").equals("travis") && setup()) {
                    try {
                        statement.evaluate();
                    } finally {
                        cleanup();
                    }
                } else {
                    System.out.println("Skipping " + description.getDisplayName()
                        + " as no database is available.");
                }
            }
        };
    }
}
