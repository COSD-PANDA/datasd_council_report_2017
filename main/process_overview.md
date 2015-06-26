# Inventory Process

## Purpose
The purpose of the Data Inventory is to get a bird's eye view of data we have in the City and to assist stakeholders in identifying data sets they consider high value for publication.  However, we deliberately designed the inventory process to do much more, as follows:

* Create and collect a base level of attributes describing our City's data. 
* Identify people currently working with and managing data.
* Establish a base level inventory of the data the City has at its disposal.
* Understand which of the city's software systems are authoritative for various pieces of information.


## Process Overview

The first part of the inventory was to identify information coordinators from each of the 35 departments/programs we engaged.  Most departments assigned a single point of contact to work with the Chief Data Officer.  However, several larger departments chose to assign multiple coordinators to represent certain divisions.  We sought out information coordinators that are knowledgeable in the business level--of how the department operates, and how users make decisions based on that knowledge.  In total, we worked with 65 coordinators.

We designed the inventory process mindful of the following realities:

* The information coordinators' time must be used as efficiently as possible, as this process is not their primary responsibility.
* Coordinators may not have a high level of technical knowledge.
* Execution time frame is only three months.
* Coordinators do not have the same base level of understanding of what is "data".

Consequently, we emphasized the following:

* Minimize large in-person meetings, but be available for small face-to-face meetings, maintaining preference for online collaboration.
* Provide all the necessary information to everyone all the time. 
* Continuously collect feedback, and be flexible enough to adjust the process.
* Automate repeatable tasks and allow technology to increase execution velocity.
* Technology or the CDO must not be a bottleneck to any of the coordinators.
* Process must be as efficient as possible to minimize rework and increase accuracy. 
* Break down large chunks of work into smaller ones.  Operate in short spurts, but allow for full-scope completion all at once.
* Create infrastructure for future growth and maintenance.
* Track progress. 

### Kickoff
Performance & Analytics conducted two kickoff meetings with the same content to field preliminary questions, engage as many coordinators as possible, and introduce the process.  These 3-hour meetings were the only large meetings held during the inventory process.

### Inventory Process 
We broke the inventory down into three steps, giving coordinators one month to complete each step.  

![Inv One Pager](http://take.ms/U11fa)

We gave each department a spreadsheet to fill out with all steps and explanations built into the sheet.  

#### Step 1
For Step 1, we asked coordinators to identify any authoritative data sources their department uses.  We identified a data source as any system that stores the primary version of data.  For example:

* Information Systems [CAN WE INSERT AN I.E. WITH 2 EXAMPLES FOR THIS ?]
* Databases [DITTO]
* Excel Spreadsheets on Shared Drives or Personal Desktops
* Access Databases on Shared Drives or Personal Desktops
* 3rd Party Vendors and data hosted on vendor systems [DO WE HAVE AN IE OR TWO FOR THIS ?]

For a further description of what we provided as datasource definitions, please see [Inventory Step 1](../attachments/core_inventory/datasources.html). [FOR THE "PAPER" REPORT, WILL YOU CHANGE THIS AND OTHER REFERENCES TO MATCH THE SECTION TITLE FROM THE TABLE OF CONTENTS?]

In addition to identifying datasources, we asked coordinators to identify:

* The person that is responsible for the technical management of the system (IT SME).
* The person that has the business level knowledge and understanding of what data are stored within the system (Business SME).
* Any potential technical changes (replacements, upgrades) the system might experience in the future.

#### Step 2
In Step 2, coordinators identified potential datasets within the datasources from Step 1.  We designed this exercise to explore what kind of data are stored within the data sources. 
Because each department has its own culture and style of communication, we provided a brainstorm guide to allow coordinators to come up with datasets in as many ways as possible.  The brainstorm guide can be found in [Inventory Step 2](../attachments/core_inventory/brainstorm_guide.html). [DITTO]


#### Step 3
In Step 3, we collected the minimum amount of information needed to get a basic understanding of datasets, in order to ultimately assist the City in prioritizing them for release.  We asked about the following indicators:
* Brief description of data   
* Frequency of data change    
* Format  
* Existing publication    
* Link to existing publication    
* Priority/value  
* Data Classification (Public / Protected / Sensitive) 
* Data Quality Concerns   
* PRA frequency   
* Comments / Extra Info

Please review the [Inventory Step 3](../attachments/core_inventory/definitions.html) for the definitions of the fields above.


### Technology
#### Inventory Sheets
Working closely with the Department of Information Technology, we took advantage of technology to complete the inventory in the required timeframe.

Through the use of technology in the inventory process, we were able to facilitate the following:
* Automate creation of spreadsheets per department.
* Maintain centralized access to all sheets while giving coordinators access to their own.
* Increase our ability to adjust quickly to feedback by writing code that made changes to all the department spreadsheets at once.
* Allow coordinators to edit their inventory documents simultaneously in real time, which prevents wasting time on merging changes between document versions.
* Aggregate and track progress for all departments in one location.


#### Reporting
To facilitate continuous reporting and track progress for all departments simultaneously, we built a central dashboard:
![CDO Dashboard](http://take.ms/BGPG1).  

However, department coordinators did not need the same level of depth, so we provided them a simplified interface: [CAN YOU MAKE THE TOP ROW OF THE DASHBOARD SHOW DIFFERENT LEVELS/COLORS FOR CONTEXT - JUST MAKE SURE NO DEPARTMENT'S NAME IS VISIBLE LIKE NOW, BUT I'D LIKE DIFF COLORS FOR ILLUSTRATIVE PURPOSES]
![deptdash](http://take.ms/fxSR6)

#### Dissemination of information.
One of our main goals was to make online resources available to all coordinators all the time.  For disseminating the information, we chose to use a technology called GitBook, which is an open source publishing work-flow system.  It also allowed us to continuously incorporate feedback and update the instructions without having to redistribute them to coordinators.

In addition to the benefit of receiving continuous feedback from City staff, we also analyzed how the staff used the documents.  By continuously tracking our documentation's effectiveness, we issued targeted clarifications and improved internal communication around Open Data.  For example, earlier versions of the inventory had separate examples for each step.  We noticed that many coordinators went to see the examples, but left those pages quickly, which suggests that they did not find them useful.  When we changed to a single example that covered the entire inventory, we instantly observed people staying on pages longer and getting more use from the examples.

Note: the metric screenshots below include the entire inventory time frame, though we used smaller intervals throughout the process. [I SUGGEST DROPPING THIS NOTE; NOBODY BUT THE MOST TECHNICAL PERSON WOULD EVER WONDER ABOUT THIS; I EVEN CONSIDERED DROPPING THE GRAPHIC, BUT I KIND OF LIKE HOW IT WILL MAKE NO SENSE TO ANYONE AND YOU WILL LOOK SMART, BUT THE NOTE IS UNNECESSARY]

######Monitoring the navigation flow of users:
We saw how people navigated through the inventory: which pages led them to other pages. Based on the feedback, we made several decisions on how to lay out the guidelines.
![gaflow](http://take.ms/0Hi0H)

######Tracking various metrics to gauge user behavior and adjust accordingly:
We tracked:
* Pages where the most people exited the guidelines.
* Viewed pages of the guidelines.
* Ratio of how many people left the site after viewing only one page.
* Pageviews, users and returning users.
![gadash](http://take.ms/5Kg8v)

######Tracking pageviews per session and returning users.
In order to gauge the usefulness of the guidelines, it was important to know how many people spent a significant amount of time reading the guidelines, and how many people returned to said guidelines.
![gashot](http://take.ms/xpqQr)

#### Compiling
R Script handles inventory data compilation and reporting across the department spreadsheets. R Script pulls summary inventory data from all spreadsheets, aggregates and then cleans the data.  In order for the inventory to be effective, it must be continuously updated, and these tools allow us to do so now and in the future.

#### Additional Sources
In addition to the human generated inventory, we are working with the Department of IT to take advantage of available technological data collection methods.  We will rely on the following sources to verify and augment the inventory data over the coming year:

* List of GIS Data
* List of Business Warehouse Reports
* List of Data provided by CGI
* Automated scanning of sandiego.gov for potential datasets




