import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyLoaderService {

  loadScript(scriptUrl: string, scriptName: string, charset?: string, position= 'head' || 'body', defer = true): Promise<any> {
    return new Promise(resolve => {
      const scriptElement = document.createElement('script');
      scriptElement.innerText = '';
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      scriptElement.async = false;
      scriptElement.defer = defer;
      if (charset) {
        scriptElement.charset = charset;
      }
      // asignando el nombre de la clase del script para poder ser identificado y evitar que vuelva a agregarse
      scriptElement.className = scriptName;
      const script = (document.getElementsByClassName(scriptName))[0];
      if (!script) {
        if (position === 'head') {
          document.head.appendChild(scriptElement);
        } else {
          document.body.appendChild(scriptElement);
        }
      }
    });
  }

  loadStyle(styleUrl: string, styleName: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const styleElement = document.createElement('link');
      styleElement.innerText = '';
      styleElement.href = styleUrl;
      styleElement.onload = resolve;

      styleElement.className = styleName;
      const style = (document.getElementsByClassName(styleName))[0];
      if (!style) {
        document.head.appendChild(styleElement);
      }
    });
  }

  removeScript(scriptName: string, position = 'head' || 'body') {
    try {
      const script = (document.getElementsByClassName(scriptName))[0];
      if (script) {
        if (position === 'head') {
            document.head.removeChild(script);
        } else {
          document.body.removeChild(script);
        }
        console.log(`script ${scriptName} deleted`);
      }
    } catch (error) {
      console.error(error);
    }
  }

  removeStyle(styleName: string) {
    try {
      const style = (document.getElementsByClassName(styleName))[0];
      if (style) {
        document.head.removeChild(style);
      }
    } catch (error) {
      // console.error(error);
    }
  }
}
