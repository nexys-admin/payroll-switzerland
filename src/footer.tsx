import React from "react";
import * as C from './config';

const Footer = () =>  <footer class="footer">
  <div class="container">
    <span class="text-muted"> <a href={C.ghUrlVersion}>{C.version}</a> -  <a href={C.ghUrl}>
        <i className="fa fa-code"></i> Source
      </a>
      &nbsp;available under MIT license. Contributions are welcome.</span>
  </div>
</footer>

export default Footer;