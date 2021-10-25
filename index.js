const express = require("express");
const app =express();
const cors =require("cors");
const JiraClient = require("jira-connector");
app.use(cors());

var jira = new JiraClient({
    host: "fortress-technology.atlassian.net",
    basic_auth:{
        username:"palasgarov@fortresstech.net",
        password:"0fit4v2yGsbbcOTBxNGnD822"

    },
    strictSSL: false,
});
app.get("/", async (req, res) =>{

        res.send("starts new nodejs project");

        jira.issue.createIssue({
            fields: {
                project: {
                    key: "XRAY",
                },
                summary: "Jira Rest API via the nodejs library",
                description: "This jira issue is created using jira-connector",
                issuetype: {
                    name: "story",
                },
                customfield_1004: "XRAY-20"
            },
            function(error, issue) {
                console.log("error", error);
                console.log("issue", issue);

            },
        });
    });
 app.listen(5000,() =>console.log("litening on port 5000"));
