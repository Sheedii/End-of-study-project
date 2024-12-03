package com.wisevision.dashboard.service;

import java.util.List;
import java.util.Map;

public interface SalesTicketsService {
    Map<String, Object> calculatePercentages(List<String> selectedItems);

    List<String> getUniqueLibs();
}
