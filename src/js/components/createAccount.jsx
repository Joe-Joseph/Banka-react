import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAccount } from '../actions/postAction';

class CreateAccount extends Component {
    state = { 
        accountType: 'savings',
    };

    handleChange = (e) => {
        this.setState({accountType: e.target.value})
    }

    handleSubmit = async (e) => {
        const accountType = this.state.accountType;
        await this.props.createAccount({type: accountType});
      };

    render() { 
        return ( 
            <div className='create-account-form'>
                <form id='create-account'>
                    <h2>Create an account</h2>
                    <div className='inputBox'>
                        <p>Select Account type</p>
                        <select
                        onChange={this.handleChange}
                        value={this.state.accountType}>
                            <option value='savings'>savings</option>
                            <option value='current'>current</option>
                        </select>
                    </div>
                    <br/>
                    <button type='button' onClick={this.handleSubmit}>Submit</button>
                </form>

                {this.props.account.message && <div className='messages'>
                    <p>{this.props.account.message}</p>
                </div>} 
            </div>
         );
    }
}

const mapStateToProps = state => ({
    account: state.newUser.account,
    newErrors: state.newErrors
  })

export default connect(mapStateToProps, {createAccount})(CreateAccount);
