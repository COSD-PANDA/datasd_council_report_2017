# Prioritization 
What is a high value dataset?  High value is a very subjective term, highly relative to the standpoint of the person making the judgement.  Therefore, to have a solid determination of "high value", we need to understand who is it that would be making the judgement:


## Components of Prioritization.
### Personas
In our thinking about Open Data, we identified several high-level personas that would naturally care about what is released.  These personas will be part of our evaluation on what constitutes datasets that are scheduled for release.

![Personas](http://take.ms/UiDp2)

In order to prioritize correctly, we are planning to measure a dataset on the following overarching factors:

### Value
The value of a dataset is gauged by demand from various stakeholders, whether this dataset will increase transparency and accountability, or create economic opportunity.

### Security
The City will place the highest priority on making sure that data that has potential security or privacy flaws is never released. A security of a given dataset can be gauged fairly quickly by the evaluator, with additional checks to be done by the information coordinator who is familiar with the data on a deeper level.

### Quality
Quality measures the quality of a dataset pre and post release.  If the coordinator flags the data as potentially having quality issues, that could prioritize it lower, since it may need some extra work.  This metric also gauges our capability to deliver it to the public consistently in a timely way through automated processes.

### Readiness
Readiness gauges the amount of work required to convert the data to an open format, and whether data is being published or not.

## Prioritization Matrix
Based on the preceding components of prioritization, we have derived a prioritization matrix. This is still pending review by the city's security and technology teams:

| **Field Name** | **Field Description** | **Prioritization Category** |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|
| Dataset | Dataset Identifier | Meta |
| Mayor Demand / Council Demand | Is there demand from the mayor / council for this dataset | Value |
| Interdepartmental demand | Can releasing this data positively influence workflows / performance? | Value |
| Departmental demand | Does the department demand for this data to be released? | Value |
| Dataset included in Open Data Census | The Open Data Census contains some of the more highly requested datasets across the country and is a good indicator for demand (http://sdgo.io/1IzdOom) | Value |
| There is an application built ready to use this data. | If there is an application built on sample data that we can deliver to citizens quickly and provide impact. | Value |
| There is a known, constant stream of PRAs for this data | If releasing this data will alleviate some PRA work from departments. | Value |
| Resident Demand | Percentage of surveyed residents who want this data released | Value |
| # Of Defined Personas Affected Positively | Based on our persona definitions, which of the personas are likely to use this data? (http://sdgo.io/1HeIOiK) | Value |
| Is this data already being published? | Is this data already being published just in an incorrect format / inconsistent location? | Readiness |
| Coordinator Value Assignment | Did the Coordinator mark this data as high / med or low priority | Value |
| Data Sensitivity Assignment | Did the coordinator mark this data as public / protected or sensitive | Security |
| Data Quality Concerns | Are there concerns about data quality? | Quality |
| Data governance structure | Does a minimum viable level of data governance structure exist for this dataset? | Quality |
| Data frequency of change | If the data gets updated often, releasing it without ETL may be irrelevant, and ETLs are harder to build so prioritization may be lower | Quality |
| ETL Required? | A 3-level indicator of whether ETL is required - 1=yes, 2=yes,but can delay, 3 = no | Quality |
| Does this data contain potential PII or Security Threats? | If this data does contain PII it will need special handling making it harder to release | Security |
| Data extraction complexity | If it's hard to extract data from a given system, lower prioritization may occur. | Readiness |
| Metadata Availability | Metadata Availability | Readiness |
| Does this data support a performance indicator? | If this data supports a published performance indicator for the department, that will cause a higher level of prioritization | Value |


