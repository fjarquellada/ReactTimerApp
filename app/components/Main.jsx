import React      from 'react';
import Navigation from 'Navigation';

var Main = (props) =>{
     return (
            <div>
              <Navigation/>
                <div>
                    <div>
                        <p>Main.jsx rndered</p>
                        {props.children}
                    </div>
                </div>
            </div>
        );
};

module.exports = Main;
