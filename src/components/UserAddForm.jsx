import React from 'react';
import { FormErrors } from './FormErrors';
import './UserAddForm.css';
class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            isGoldClient: false,
            formErrors: {email: '', name: ''},
            validEmail: false,
            validName: false,
            validForm: false
        };
    }

    updateName(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value }, () => { this.validateField(name,value) });
    }

    validateField(fieldName, value){
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.validEmail;
        let nameValid = this.state.validName;

        switch(fieldName){
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : 'is invalid';
                break;
            case 'name':
                nameValid = value.length >= 1;
                fieldValidationErrors.name = nameValid ? '' : 'is empty';
                break;
            default:
                break;
        }

        this.setState({formErrors: fieldValidationErrors,
                        validEmail :emailValid,
                        validName: nameValid
                    }, this.validateForm);
    }

    validateForm(){
        this.setState({validForm: this.state.validEmail && this.state.validName});
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    }

    render() {
        const {name, email, isGoldClient} = this.state;
        
        return (
            <div id='theForm'>
                <div>
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
                <h2>Adauga utilizatori:</h2>
                <form
                    className="user-add-form"
                    onSubmit={(event) => this.props.submitAddForm(event, name, email, isGoldClient)}
                >
                    <div className='inputBox'> 
                        <label htmlFor="name">Nume:</label>
                        <input
                            type="text"
                            name="name"
                            onChange={(event) => this.updateName(event)}/>
                    </div>
                    
                    <div className='inputBox'> 
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={(event) => this.updateName(event)}/>
                    </div>
                    
                    <div>
                        <label htmlFor="is-gold-client">GOLD Client</label>
                        <input
                            type="checkbox"
                            name="is-gold-client"
                            value="true"
                            onChange={(event) => this.updateIsGoldClient(event)}/>
                    </div>    

                    <button type="submit" disabled={!this.state.validForm}> 
                        Input user 
                    </button>
                </form>
            </div>
        )
    }
}

export default UserAddForm;