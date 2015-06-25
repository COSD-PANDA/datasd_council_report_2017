# Inventory 

## Purpose
The purpose of the Data Inventory is to get a bird's eye view of data we have in the City and to assist stakeholders to be able to identify data sets they consider high value for publication.  However, the inventory process was designed to begin the following processes:

* Create and collect a base level of attributes describing our City's data. 
* Identify people currently working with and managing data.
* Establish a base level inventory of the data the City has at its disposal.
* Understand which of the city's software systems are authoritative for various pieces of information.


## Process Overview

The first part of the inventory was to assign information coordinators from each of the 35 departments/programs we engaged to work with the Chief Data Officer.  Most departments assigned a single point of contact to work with the CDO.  However, several larger departments chose to assign multiple coordinators to represent certain divisions.  We sought out information coordinators  knowledgeable in the business level of how the department operates and how users make decisions based on that knowledge.  In total, we worked with 65 coordinators.

We designed the inventory process mindful of the following realities:

* The information coordinators' time must be used as efficiently as possible, as this process is not their primary responsibility.
* Coordinators may not have a high level of technical knowledge.
* Execution time frame is only three months.
* Coordinators do not have the same base level of understanding of what is "data".

Consequently, we emphasized the following:

* Minimize large in-person meetings, but be available for small face-to-face meetings, maintaining preference for online collaboration.
* Provide all the necessary information to everyone all the time. 
* Continously collect feedback, and be flexible enough to adjust the process.
* Automate repeatable tasks and allow technology to increase execution velocity.
* Technology or the CDO must not be a bottleneck to any of the coordinators.
* Process must be as efficient as possible to minimize rework and increase accuracy. 
* Break down large chunks of work into smaller ones.  Operate in short spurts but allow for full-scope completion all at once.
* Create infrastructure for future growth and maintenance.
* Track progress. 

### Kickoff
Performance & Analytics conducted two kickoff meetings with the same content to field preliminary questions, engage as many coordinators as possible, and introduce the process.  These 3-hour meetings were the only large meetings held during the inventory process.

### Inventory Process 
We broke the inventory into three steps, with coordinators given one month to complete each step.  

![Inv One Pager](http://take.ms/lv7da)

Each department was given a spreadsheet to fill out with all the steps and explanations built into the sheet.  

#### Step 1
For Step 1 we asked coordinators to identify any authoritative data sources their department uses.  We identified a data source as any system that stores the primary version of data.  For example:

* Information Systems
* Databases
* Excel Spreadsheets on Shared Drives or Personal Desktops
* Access Databases on Shared Drives or Personal Desktops
* 3rd Party Vendors and data hosted on vendor systems

For a further description of what we provided as datasource definitions for coordinators, please see [Inventory Step 1](../attachments/core_inventory/datasources.html).

In addition to identifying datasources, coordinators were asked to identify:

* The person that is responsible for the technical management of the system (IT SME).
* The person that has the business level knowledge and understanding of what data are stored within the system (Business SME).
* Any potential technical changes (replacement, upgrades) the system might experience in the future.

#### Step 2
In Step 2 coordinators identified potential datasets within the datasources from Step 1.  We designed this exercise to begin to explore what kind of data are stored within the data sources.  

Because each department has its own culture and style of communicating, we provided a brainstorm guide to allow coordinators to come up with datasets in as many ways as possible.  The brainstorm guide can be found in [Inventory Step 2](../attachments/core_inventory/brainstorm_guide.html).

#### Step 3
In Step 3 we collected the minimum amount of information needed to get a basic understanding of datasets to ultimately assist the City in prioritizing them for release.  We asked about the following indicators:
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
* Increase our felxiblity to quickly adjust to feedback by writing code that made changes to all the department spreadsheets at once.
* Allow coordinators to edit their inventory documents simultaneously in real time, preventing time spent on merging changes between document versions.
* Aggregate and track progress for all departments in one location.


#### Reporting
To facilitate continuous reporting and track progress for all departments simultaneously, we built a central dashboard:
![CDO Dashboard](http://take.ms/BGPG1).  

However, department coordinators did not need the same level of depth, so we provided them a simplified interface:
![deptdash](http://take.ms/fxSR6)

#### Dissemination of information.
One of our main goals was to make online resources available to all coordinators all the time.  For disseminating the information, we chose to use a technology called GitBook which is an open source publishing workflow system.  It also allowed us to continuously incorporate feedback and update the instructions without having to re-email them out to coordinators.

In addition to the benefit of receiving continuous feedback from City staff, we also were able to analyze how users were using the documents.  By continuously tracking our documentation's effectiveness, we could issue targeted clarifications, and improve internal communication around Open Data.  For example, earlier versions of the inventory had separate examples for each step.  We noticed that lots of coordinators were going to see the examples, but leaving those pages quickly, meaning they were not useful.  When we changed to a single example to cover the whole inventory, we instantly saw people staying on pages longer and getting more use from the examples.

Note: the metric screenshots below include the entire inventory time frame, though we used smaller intervals throughout the process.

######Monitoring the navigation flow of users:
We were able to see how people navigate through the inventory, which pages lead them to other pages and based on that we made several decisions on how the guidelines were laid out.
![gaflow](http://take.ms/0Hi0H)

######Tracking various metrics to gauge user behaviour and adjust accordingly:
We tracked:
* Pages where the most people exited the guidelines.
* To viewed pages of the guidelines.
* Ratio of how many people left the site after viewing only one page.
* Pageviews, users and returning users.
![gadash](http://take.ms/5Kg8v)

######Tracking pageviews per session and returning users.
It was important to know how many people spent a significant amount reading the guidelines, and how many people were coming back in order to gauge how useful the guidelines were to coordinators.
![gashot](http://take.ms/xpqQr)

#### Compiling
Compilation and reporting of the inventory data across the department spreadsheets is handled by an R Script that pulls data from all spreadsheets, aggregates, and cleans it.  In order for the inventory to be effective, it must be continuously updated, and these tools allow us to do so now and into the future.

#### Additional Sources
In addition to the human generated inventory, we have worked closely with the Department of IT to take advantage of available technological data collection methods.  We will rely on the following sources to verify and augment the inventory data over the coming year:

* List of GIS Data
* List of Business Warehouse Reports
* List of Data provided by CGI
* Automated scanning of sandiego.gov for potential datasets




