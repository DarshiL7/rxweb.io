export const SCOPED_TRANSLATIONS = [
    {
        "name": "src",
        "type": "folder",
        "exampleType": "scoped",
        "childrens": [
            {
                "name": "app",
                "type": "folder",
                "childrens": [
                    {
                        "name": "global",
                        "type": "folder",
                        "childrens": [
                            {
                                "name": "global.component.ts",
                                "type": "file",
                                "active": true,
                                "contentType": 'typescript',
                                "ref": "scoped",
                                "content": "import { Component } from \"@angular\/core\"\r\nimport { translate } from '@rxweb\/translate'\r\n\r\n@Component({\r\n    templateUrl: '.\/global.component.html',\r\n})\r\nexport class GlobalComponent {\r\n\r\n    @translate() global: { [key: string]: any }\r\n\r\n    freeText: string =\"India\";\r\n    \r\n}\r\n"
                            },
                            {
                                "name": "global.component.html",
                                "type": "file",
                                "ref": "scoped",
                                "contentType": 'html',
                                "content": "<h4 class=\"example-title\">{{global.scopedTitle}}<\/h4>\r\n<form class=\"work-sanslight mg-left-5\">\r\n  <div class=\"form-group row\">\r\n    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">{{global.text.freeText}}<\/label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"text\" [(ngModel)]=\"freeText\" [ngModelOptions]=\"{standalone: true}\" [placeholder]=\"global.placeholder.freeText\" class=\"form-control\">\r\n      <div class=\"alert alert-warning alert-dismissible fade show\" style=\"margin-top:5px;\">\r\n        {{global.text.enteredText}} \r\n      <\/div>\r\n    <\/div>\r\n    \r\n  <\/div>\r\n<\/form>\r\n"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "assets",
                "type": "folder",
                "childrens": [
                    {
                        "name": "i18n",
                        "type": "folder",
                        "childrens": [{
                            "name": "en",
                            "type": "folder",
                            "childrens": [
                                {
                                    "name": "global.en.json",
                                    "type": "file",
                                    "contentType": 'json',
                                    "ref": "static",
                                    "content": "{\r\n  \"scopedTitle\": \"Scoped Translation\",\r\n  \"text\": {\r\n    \"freeText\": \"Free Text\",\r\n    \"enteredText\": \"You have entered text is: {{freeText}}\"\r\n  },\r\n  \"placeholder\": {\r\n    \"freeText\": \"Enter Free Text\"\r\n  },\r\n}\r\n"
                                }
                            ]
                        }, {
                            "name": "fr",
                            "type": "folder",
                            "childrens": [{
                                "name": "global.fr.json",
                                "type": "file",
                                "contentType": 'json',
                                "ref": "static",
                                "content": "{\r\n  \"scopedTitle\": \"Traduction de l'étendue\",\r\n  \"text\": {\r\n    \"freeText\": \"Texte libre\",\r\n    \"enteredText\": \"Vous avez saisi du texte est: {{freeText}}\"\r\n  },\r\n  \"placeholder\": {\r\n    \"freeText\": \"Entrez du texte libre\"\r\n  }\r\n}\r\n"
                            }]
                        }
                        ]
                    }
                ]
            },
            {
                "name": "rxweb.module.ts",
                "contentType": 'typescript',
                "type": "file", "ref": "scoped",
                "content": "import { NgModule } from '@angular\/core'; \r\nimport { RxTranslateModule } from '@rxweb\/translate' \r\n \r\n@NgModule({ \r\n    imports: [ \r\n        RxTranslateModule.forRoot({ \r\n            cacheLanguageWiseObject: true, \r\n            globalFilePath: 'assets\/i18n\/{{language-code}}\/global.{{language-code}}.json', \r\n               }) \r\n    ], \r\n    exports: [RxTranslateModule], \r\n}) \r\nexport class RxWebModule { }\r\n\r\n\/\/ Import this RxWebModule in your root module",
            }
        ]
    }
]

