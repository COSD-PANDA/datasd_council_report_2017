# Prioritization
What is a high value dataset?  High value is a subjective term, highly relative to the standpoint of the person making the judgment.  Therefore, to have a solid determination of "high value", we need to understand who it is that may be making the judgment:


## Components of Prioritization.
### Personas
In our thinking about Open Data, we identified several high-level personas that would naturally care about what is released.  These personas will be part of our evaluation on what constitutes datasets that are scheduled for release.

![Personas](http://take.ms/UiDp2)

In order to prioritize, we plan to measure a dataset on the following overarching factors:

### Value
The value of a dataset is gauged by demand from various stakeholders; whether this dataset will increase transparency, accountability or internal efficiency; or create economic opportunity.

### Security
The City will place the highest priority on protecting data that exposes the City to security risks or the public's private information from release.

### Quality
Low-quality data (i.e. missing fields, erroneous entry, manually updated) could receive a lower prioritization, since it may need some extra work.

### Readiness
Readiness gauges the amount of work required to convert the data to an open format, and whether data is already routinely published.

## Prioritization Matrix
Based on the preceding components of prioritization, we have derived an initial prioritization matrix that will be revised as necessary following a legal and technical review: [SO, I SUGGEST COMBINING THE "PCI AND POTENTIAL PII" INTO ONE ROW AND COMBINING "INFO DETRIMENTAL AND BUSINESS SENSITIVE DATA INTO ONE" TO STREAMLINE THE NUMBER OF ROWS.


| **Field Name** | **Field Description** | **Prioritization Category** |
|------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|
| Dataset | Dataset Identifier | Meta |
| Mayor Demand / Council Demand | Is there demand from the Mayor / Council for this dataset? | Value |
| Interdepartmental demand | Can releasing this data positively influence workflows / performance across City silos? | Value |
| Departmental demand | Does the department desire that this data be released? | Value |
| Dataset included in Open Data Census | The Open Data Census contains some of the more highly requested datasets across the country and is a good indicator for demand (http://sdgo.io/1IzdOom) | Value |
| There is an application built ready to use this data. | If there is an application built on sample data that we can deliver to residents or other users quickly and provide impact. | Value |
| There is a known, constant stream of PRAs for this data | If releasing this data will alleviate some PRA work from departments. | Value |
| Resident Demand | Percentage of surveyed residents who want this data released | Value |
| # Of Defined Personas Affected Positively | Based on our persona definitions, which of the personas are likely to use this data? (http://sdgo.io/1HeIOiK) | Value |
| Is this data already being published? | Is this data already being published, but not in a central, organized location and in open format? | Readiness |
| Coordinator Value Assignment | Did the Coordinator mark this data as high / med or low priority | Value |
| Data Sensitivity Assignment | Is this data public, protected or sensitive | Security |
| Data Quality Concerns | Are there concerns about data quality? | Quality |
| Data governance structure | Does a minimum viable level of data governance structure exist for this dataset? | Quality |
| Data frequency of change | If the data gets updated often, releasing it without ETL will render it irrelevant, and building ETLs may require investment of time and money. | Quality |
| ETL Required? | A 3-level indicator of whether ETL is required - 1=yes, 2=yes,but can delay, 3 = no | Quality |
| Does this data contain potential PII? | If this data contains PII, it will need special handling making it harder to release | Security |
| Does this data contain information detrimental to the city's security if released? | If this data contains such information, it will need special handling making it harder to release | Security |
| Does this data contain PCI data | If this data contains such information, it will need special handling making it harder to release | Security |
| Does this data contain business sensitive data | If this data contains such information, it will need special handling making it harder to release | Security |
| Data extraction complexity | If it's hard to extract data from a given system, it may result in a lower prioritization | Readiness |
| Metadata Availability | Metadata Availability | Readiness |
| Does this data support a performance indicator? | If this data supports a published performance indicator for the department, that will cause a higher level of prioritization | Value |


