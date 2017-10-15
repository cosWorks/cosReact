# cosReact
* Installation
    * [Benötigte Tools](#installation)
    * [Projekt auschecken](#checkout)
    * [Installation der NodePackages](#npminstall)
    * [Idea Einstellungen](#idea)
    
* Starten des Projektes
    * [Anpassen der webpack.config.js](#configWebpoack)
    * [Webpack zum Starten verwenden](#devServer)
    
## <a name="installation"></a> Tools

Folgende Tools werden auf Deinem Rechner benötigt:

- NodeJs (https://nodejs.org/dist/v6.11.4/node-v6.11.4-x64.msi)
- GIT (https://git-scm.com/download/win)
- Chrome Browser :) (https://www.google.de/chrome/browser/desktop/index.html)
- Vorzugsweise Idea geht aber auch mit anderen UI Tools. Guide geht nur auf Idea ein.

Alle Tools nach Standard "F" installieren

## <a name="checkout"></a> Projekt auschecken
Nach der Installation der Tools kann das Projekt ausgecheckt werden.

Konsole öffnen und folgende Befehle absetzen:
```
cd <lokales Verzeichnis>
https://github.com/cosWorks/cosReact.git
```
## <a name="npminstall"></a> Installationen benötigter Packages
 
In der Konsole in das Projekt wechseln und folgenden Befehl ausführen:
```
npm install --global webpack
npm install --global webpack-dev-server
npm install
```

## <a name="idea"></a> Einstellungen in Idea

Projekt in Idea öffnen und folgende Einstellungen vornehmen:
```
File -> Project Structure -> Modules
Dort die Module node_modules und .idea excludieren
``` 
Weiterhin muss der JS Editor auf JSX umgestellt werden:
```
File -> Settings -> Languages and Frameworks -> Javascript
Dort bei Javascript language version  "React JSX" einstellen 
```

## <a name="idea"></a> Anpassen der Webpack Config JS

Im Verzeichnis befindet sich die Datei
```
webpack.config.js 
```
Bitte Zeile 21 wie folgt anpassen:
```
path: '<ReproVerzeichnis auf der Festplatte>\\cosReact\\app\\htdocs', 
z.B. 
path: 'C:\\workspaces\\cosReact\\app\\htdocs', 
```

## <a name="idea"></a> Webpack zum Starten verwenden

Wieder gehts in die Konsole:
```
cd  <ReporpVerzeichnis>\cosReact
z.B. 
cd \workspaces\cosReact
```
Danach kann der Server mit folgendem Befehl gestartet werden:
```
webpack-dev-server --port 8010 --content-base app/htdocs
Der Port kann beliebig auf eigene Bedürfnisse geändert werden 
```
Nun Chrome öffnen
```
http://localhost:8010/
```

Gestoppt kann der Server mit STR-C.