# Executive Summary

With the launch of the Open Data Portal at [data.sandiego.gov](http://data.sandiego.gov/), the City became the first government of any level in the entire region to create a portal that, consistent with its Open Data Policy, makes “City data available online using open standards.”[1] Before, City data was closed, hard to find, and misunderstood. Opening up the City's data ties in directly with each of our Strategic Goals and allows us to monitor our progress in achieving them. The policy’s goal is for all high-value public datasets to be published on our portal. 44 datasets were available at launch, and many more are at some stage of the publication process.

The Data & Analytics team has also spent the past fiscal year making progress on other goals of the Open Data Program and working within the community to promote City data and innovative, data-based strategies for making San Diego a better place to live, work, and do business.

This report describes the creation of a public data inventory, the launch of the open data portal, lessons learned and next steps, and our work in the community. Below are summaries of our major areas of work during the past year.

##The inventory and prioritization

Before putting any data onto a portal, we needed to determine which high-value, public datasets the City had. We began that process in Fiscal Year 2016 with a manual survey of datasets the Chief Data Officer conducted with the help of information coordinators in each department and program. The results of that survey, along with our own work discovering data across the City, contributed to the public inventory published at [datasd.org](http://www.datasd.org/inventory/). The inventory is a living document. As we continue to evaluate data we discover, we will add more public datasets.

Once we had established the beginnings of a high-value public inventory, we had to consider the quality, security and readiness of each dataset as part of our prioritization process. The inventory gave us 136 public datasets to work with, and prioritization identified the first 44 that were published at the launch of the open data portal.

##Portal launch

An open data portal is really just a website containing a catalog of City data. After considering which portal product to use from among multiple vendors, we chose DKAN. DKAN is an open-source Drupal website that conforms to federal DCAT schemas. DKAN has an intuitive user interface, and it also offers extra features such as a customizable pages, data stories and charting capabilities.

Launching the portal required us to simultaneously manage three main efforts: conducting a data release process for all 44 datasets; standing up the portal; and building automation for data updates.

##Data release process

We realized quickly that a flexible data release process was necessary. We had certain things we had to standardize, but we also wanted to avoid imposing a rigid, disruptive requirement on City staff working with us to release data. Departments and City staff determine their own methods for working with their data, and some data is managed by people with varying technological expertise. We also set a standard for our team that, before putting any data on the portal, we would have to understand the data enough to be able to answer questions about it. In this way, we were able to secure buy-in from staff who might have been concerned about an inundation of questions about their data, which could have been disruptive to their official day jobs.

For nearly all datasets, the first step in data release was a discovery meeting with the data steward. Here, we were able to ask questions and learn about any caveats or special circumstances with the data. We also established a contact who would provide us feedback for later steps of the process and help us write a title and description and data dictionary. We were able to plan how we would connect to the data source for automatic updates. By the end of the process, we had a sample of the data formatted exactly how it should be published on the portal, text describing the data, metadata values, and a plan for automation.

As we finalized data samples, we had to decide how pieces of content would be organized according to the DCAT schema. With DCAT, a “dataset” is a container that contains downloadable files, or “resources.” On each dataset page on the portal, you will find multiple resources. At the minimum, we have one resource for the most granular level of data and one resource that contains the data dictionary. Other datasets also include resources for different aggregations of data, or for data that had to be broken up into different years.

For more information about the data release process, see Chapter 4. For more information about DCAT and how our catalog is organized, see Chapter 5.

##Standing up the portal

Buying a portal from DKAN meant acquiring a basic structure, but that structure needed to be filled in with content. In addition to building the entire catalog, we customized the site with colors from our style guide, our new City logo and an image of San Diego on the homepage.

We wanted a portal that would cater to many types of users, including people who might be interested in their government but not have the technical skill to download and analyze large datasets. So, we spent time crafting content beyond the data catalog that would make the portal relevant to a wider audience. We added a tutorial for the portal under a “Get started” link, and we built a section into the homepage with links for different types of users and various ways for people to get in touch and give us feedback.

Another type of content we made use of is data stories. This feature of the portal allows us to tell stories with City data. This is particularly useful when a dataset needs to be put into context, or when we can personalize data by putting it on a map and allowing users to search for their address. We worked with City staff to build data stories that would also be useful internally. At launch, we had four data stories related to street sweeping, solar permits, water quality, and parking meters.

##Building automation

If we promise to update a dataset daily, weekly or monthly, having an employee be responsible for this unnecessarily adds to his or her workload and subjects the data to the risk of human error. Automating updates is the only reliable way to ensure timely and consistent updates. Extract, Transform and Load (ETL) is a three-phase process that controls how we connect to the data, or extract it, how we get it ready for publication, or transform it, and finally how we get it onto the portal, or load it. It wouldn’t make sense to rely on computer processes to extract and transform data, but then have a person upload it.

Getting connections to City data sources was time-consuming, but we were able to get them in most cases. Many of our datasets come from relational databases or spreadsheets stored on shared drives, and we were able to get the appropriate credentials and permissions. In a few cases, the data we wanted was stored in systems maintained by a vendor with whom the City contracts. We worked with these vendors to create regular automatic extracts from their databases and store them in a place we can access over the internet.

Although 44 data sets are on the portal, we are still completing the connections between our transformed datasets and the portal. We also need to write scheduling code that will initiate ETL at different frequencies depending on the dataset.

##Next steps

For our full list of next steps, see Chapter 7. Below are some of our major areas of work in the near future.

1.Continue data release

Our data inventory currently has hundreds of high-quality datasets, and we expect it to grow as we automate ways to find data across the City. We have until 2020 to publish on the portal all high-value public datasets. If a dataset cannot be published, a full explanation will be included in our compliance plan.

2. Maintain portal stability

Technology breaks, databases change, and servers go down. We will be building ways to monitor our technology and receive alerts when we need to act.

3. Launch a data help desk

Increasing data literacy and promoting use of data internally are major goals of our program. We will launch a data help desk where City employees can request hands-on assistance using and analyzing data.

4. Increase our scope to include analytics and technological problem-solving

A data scientist will be joining our team this fiscal year to apply knowledge of statistics and technology to solve real City problems. We have heard from employees in every department about ideas they have for using data to improve services and make decisions. We have also heard that people need help using technology to better manage data.

##Program goals

1. Increase data literacy within the City and with those who interact with the City

There are various levels of understanding of what are data, metadata, Open Data, etc.

2. Manage data as an asset, formalizing existing oversight and ownership

Take existing data management and responsibility structures, build on them and formalize them to create a robust data management program that would prevent data duplication and rework, as well as ensure sustainability of Open Data release.

3. Release data to the public via a strategic and predictable process

Data releases must account for a multitude of factors including communications with stakeholders, data integrity, personally identifiable information (PII), and ensuring that we describe and release data in a way that meets Open Format specifications.

4. Ensure that data are well described and catalogued

Understanding what data we have is crucial to both Open Data and data management. We worked with departments to create an initial inventory, and now we need to provide processes for how it can stay current.

5. Support increased use of data in decision making, as well as innovations in Open Data use.

We have a talented City workforce that makes data-driven decisions every day. In addition, fostering and expanding interest in government data from residents and other users is crucial to delivering the benefits of an Open Data program.

________________

[1] City of San Diego Open Data Policy: Purpose



