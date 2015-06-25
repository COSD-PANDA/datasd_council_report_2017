# Prioritization 
What is a high value dataset?  High value is a very subjective term, highly relative to the standpoint of the person making the judgement.  Therefore, to have a solid determination of "high value", we need to understand who is it that would be making the judgement:

## Structural Components of Prioritization
In order to have a clear prioritization strategy, we are combining several pieces into our decision making:

### Personas
In our thinking about Open Data, we identified several high-level personas that would naturally care about what is released.  

![Personas](http://take.ms/UiDp2)

### Internal Information Sources
Sources such as the resident data survey (to be released), PRA request tracking, and the inventory (which provides a lot of valuable prioritization information) serve as key factors in prioritization.

### External Information Sources
Sources such as the Open Data Census serve as a good gauge of what has been released by other cities.

## Prioritization Factors
Combining all those factors allows us to have a prioritization matrix for datasets.  Once the inventory is cleaned up, we should be able to plug it into the matrix for prioritization.

| Dataset                                                   | Dataset Identifier                                                                                                                                      | Meta      |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|
| Mayor Demand / Council Demand                             | Is there demand from the mayor / council for this dataset                                                                                               | Internal  |
| Interdepartmental demand                                  | Can releasing this data positively influence workflows / performance?                                                                                   | Internal  |
| Departmental demand                                       | Does the department demand for this data to be released?                                                                                                | Internal  |
| Dataset included in Open Data Census                      | The Open Data Census contains some of the more highly requested datasets across the country and is a good indicator for demand (http://sdgo.io/1IzdOom) | External  |
| There is an application built ready to use this data.     | If there is an application built on sample data that we can deliver to citizens quickly and provide impact.                                             | External  |
| There is a known, constant stream of PRAs for this data   | If releasing this data will alleviate some PRA work from departments.                                                                                   | External  |
| Resident Demand                                           | Percentage of surveyed residents who want this data released                                                                                            | External  |
| # Of Defined Personas Affected Positively                 | Based on our persona definitions, which of the personas are likely to use this data? (http://sdgo.io/1HeIOiK)                                           | Strategic |
| Is this data already being published?                     | Is this data already being published just in an incorrect format / inconsistent location?                                                               | Strategic |
| Coordinator Value Assignment                              | Did the Coordinator mark this data as high / med or low priority                                                                                        | Strategic |
| Data Sensitivity Assignment                               | Did the coordinator mark this data as public / protected or sensitive                                                                                   | Strategic |
| Data Quality Concerns                                     | Are there concerns about data quality?                                                                                                                  | Strategic |
| Data governance structure                                 | Does a minimum viable level of data governance structure exist for this dataset?                                                                        | Strategic |
| Data frequency of change                                  | If the data gets updated often, releasing it without ETL may be irrelevant, and ETLs are harder to build, so prioritization may be lower                 | Technical |
| ETL Required?                                             | A 3-level indicator of whether ETL is required - 1=yes, 2=yes,but can delay, 3 = no                                                                     | Technical |
| Does this data contain potential PII or Security Threats? | If this data does contain PII it will need special handling making it harder to release                                                                 | Technical |
| Data extraction complexity                                | If it's hard to extract data from a given system, lower prioritization may occur.                                                                       | Technical | 