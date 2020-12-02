# GC.Spread.Sheets.Designer Wrapper for Angular

### `npm install`
The dependencies required to install

### `npm run start`
The dependencies required to start sample

### SpreadJS Designer Angular Wrapper Component Markup
```js
<designer></designer>
```

**styleInfo prop** Pass styleInfo to the component props to customize the designer's style.
```js
<designer [props]="props"></designer>
props = {
    styleInfo: "width: 800px; height: 800px"
}
```

**config prop** Pass in the custom **config** to customize the Designer.
```js
<designer [props]="props"></designer>
props = {
    config: customConfig()
}

function customConfig() {
    //config import from local
    config.ribbon[0].buttonGroups.unshift(
        {
            "label":"NewDesigner",
            "thumbnailClass":"welcome",
            "commandGroup":{
                "children":[
                    {
                        "direction":"vertical",
                        "commands":[
                            "Welcome"
                        ]
                    }
                ]
            }
        }
    );
    let customCommand = {
        title: "Welcome",
        text: "Welcome",
        iconClass: "ribbon-button-welcome",
        bigButton: "true",
        commandName: "Welcome",
        execute: async (context, propertyName) => {
            alert('Welcome to new designer.');
        }
    }
    config.commandMap = {
        Welcome: customCommand
    }
    return config;
}
```
**designerInitialized event** Fired after instantiation.
```js
<designer (designerInitialized) = "getDesgner($event)"></designer>
function getDesgner(event) {
    //this is designer instance
    console.log(event.designer);
}
```