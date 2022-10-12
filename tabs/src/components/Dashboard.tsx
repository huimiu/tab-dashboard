import "./Dashboard.css";

import React from "react";

import { List } from "./sample/List";

interface IDashboardProp {}

export default class Dashboard extends React.Component<{}, IDashboardProp> {
  constructor(props: any) {
    super(props);
  }

  async componentDidMount() {}

  render() {
    return (
      <>
        <div className="dashboard">
          <div className="row">
            <div className="widget">
              <List />
            </div>
          </div>
        </div>

        {/*        
         You can display two widgets in one row like this:

          <div className="dashboard">
            <div className="row">
              <div className="widget">
                <List />
              </div>
              <div className="widget">
                <List />
              </div>
            </div>
          </div>
          
        */}

        {/*
          You can display two rows of widgets like this:
         
          <div className="dashboard">
            <div className="row">
              <div className="widget">
                <List />
              </div>      
            </div>
            <div className="row">
              <div className="widget">
                <List />
              </div>             
            </div>
          </div>
          
        */}
      </>
    );
  }
}
