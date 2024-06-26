# Leaflet Js Wrapper using Java script

A Simple Wrapper around Leaflet Js. The concept is to provide that we can add new functionality and create an object as same as Leaflet.

## Installation steps

After checkout to the project branch,
```bash
npm install
```
Build the application
```bash
npm run build
```

Use the bundle.js to the client application.

## Eg React code,
```javascript
useEffect(() => {
        // Ensure MyMapFramework is available globally
        if ((window as any).MapJsLeaflet) {
          const map = new (window as any).MapJsLeaflet.VanilaMapJS('mapdiv', { center: [33.644221, 64.956331], zoom: 9 });
          map.setView([33.644221, 64.956331], 9);
          map.addPoints([33.738662, 64.461319], "<h3>Point 1</h3>")
          map.addPoints([33.725551, 65.610566], "<h3>Point 2</h3>")
          map.addPoints([33.428718, 65.011507], "<h3>Point 3</h3>")
          map.addPoints([33.564589, 64.913411], "<h3>Point 4</h3>")
          map.resize()
        }
      }, []);
    
      return <div id="mapdiv" style={{height: "500px"}}></div>;
```