package com.wisevision.dashboard.serviceImp;

import com.wisevision.dashboard.entity.person;
import com.wisevision.dashboard.Repository.PersonRepository;
import com.wisevision.dashboard.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PersonServiceImpl implements PersonService {

    private final PersonRepository personRepository;

    @Autowired
    public PersonServiceImpl(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @Override
    public Map<String, Integer> calculateHexagonPersonCount() {
        List<person> people = personRepository.findAll();
        Map<String, Integer> hexagonCount = new HashMap<>();

        int hexRadius = 5; // Hexagon radius in pixels
        double hexHeight = Math.sqrt(3) * hexRadius;
        double hexWidth = 2 * hexRadius;

        for (person person : people) {
            for (String obj : person.getObjects()) {
                String[] parts = obj.split("\\|");
                if (parts.length < 3) continue;

                double x = Double.parseDouble(parts[1]);
                double y = Double.parseDouble(parts[2]);

                int hexX = (int) Math.round(x / hexWidth);
                int hexY = (int) Math.round(y / hexHeight);

                // Calculate a unique ID for each hexagon
                int hexId = hexX + hexY * 139; // Assuming a grid width of 139 hexagons (690 / 5)
                if (hexId > 250 && hexId <=4150) {
                    String hexIdStr = "cell_" + hexId;

                    hexagonCount.put(hexIdStr, hexagonCount.getOrDefault(hexIdStr, 0) + 1);
                }
            }
        }

        return hexagonCount;
    }

}
