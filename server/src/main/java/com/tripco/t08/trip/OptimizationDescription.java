package com.tripco.t08.trip;

public class OptimizationDescription {
    public String label;
    public String description;

    public OptimizationDescription(String label, String description) {
        this.label = label;
        this.description = description;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "OptimizationDescription{"
               + "label='" + label + '\''
               + ", description='" + description + '\''
               + '}';
    }
}
