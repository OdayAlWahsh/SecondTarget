import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {

      titel: '',
      caption: '',
      type: '',
      isAction: false,


      userData: [
        { key: 0, title: '', caption: '', type: '', isAction: false },
      ]
    };
  }




  handleChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value
      }
    )

  }
  _handleChange = (event) => {
    this.setState({ type: event.target.value })
  }

  _handleChange1 = (event) => {
    this.setState({ isAction: !this.state.isAction })

  }


  handleSubmit = (e) => {
    e.preventDefault();

    var newitem = {
      key: this.state.userData.length,
      title: this.state.titel,
      caption: this.state.caption,
      type: this.state.type,
      isAction: this.state.isAction
    }
    var newArr = this.state.userData;
    newArr.push(newitem)
    this.setState({
      userData: newArr
    }

    )
    console.log("newitem: " + JSON.stringify(newitem));

  }

  handleSave = (e) => {
    e.preventDefault();

    fetch('http://demo9606913.mockable.io/save', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(this.state.userData)

    })

  }

  render() {



    return (
      <div>
        <div className="App">
          <form>


            <div className="container">
              <div className="row" style={{ marginTop: '40px' }}>
                <div className="col-6">

                  <div className="row" >
                    <div className="col">
                      <label >Titel</label>
                    </div>
                    <div className="col">
                      <input type="text" name="titel" className="form-control" onChange={this.handleChange}></input>
                    </div>
                  </div>

                  <div className="row" style={{ marginTop: '20px' }}>
                    <div className="col">
                      <label >Caption</label>
                    </div>
                    <div className="col">
                      <input type="text" className="form-control" name="caption" onChange={this.handleChange}></input>
                    </div>
                  </div>


                  <div className="row" style={{ marginTop: '20px' }}>
                    <div className="col">
                      <label >Type</label>
                    </div>
                    <div className="col">
                      <div className="form-group">

                        <select className="form-control" onChange={this._handleChange} >
                          <option value="Main">Main</option>
                          <option value="Sub">Sub</option>
                          <option value="Secondary">Secondary</option>

                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row" style={{ marginTop: '20px' }}>
                    <div className="col">
                      <label >Is Action</label>
                    </div>
                    <div className="col">

                      <div className="checkbox">
                        <label >
                          <input type="checkbox" onChange={this._handleChange1} ></input>
                          Enabel
                    </label>
                      </div>

                    </div>
                  </div>

                  <div className="row" style={{ marginTop: '20px' }}>
                    <div className="col">
                      <button type="submit" className="btn btn-primary" onClick={this.handleSubmit.bind()}>Add</button>
                    </div>
                    <div className="col">

                      <div className="col">
                        <button type="submit" className="btn btn-success" onClick={this.handleSave.bind()}>Save</button>
                      </div>

                    </div>
                  </div>



                </div>



              </div>

              <div className="row" style={{ marginTop: '40px' }} >
                <div className="col-3">
                  Title

                 </div>
                <div className="col-3">
                  Caption
              </div>
                <div className="col-3">
                  Type
             </div>
                <div className="col-3">
                  Is Action
             </div>



                {this.state.userData.map((item, index) => {
                  return <div key={index} className="row col-12" >
                    <div className="col-3">


                      {item.title}

                    </div>
                    <div className="col-3">


                      {item.caption}



                    </div>
                    <div className="col-3">


                      {item.type}


                    </div>
                    <div className="col-3">


                      {item.isAction.toString()}


                    </div>

                  </div>

                })}

              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
