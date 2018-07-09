import React from 'react';
import { Container,Button,Form,FormGroup,Input,Alert, Label} from 'reactstrap'
//import 'bootstrap/dist/css/bootstrap.min.css';
export default class Login extends React.Component{
  constructor(props) {
   super(props);


   this.state = {
     status:''
   };
 }
render(){
    return(
      <div>

      <Container>
            <Form>
            <Label>Login Form</Label>
          <FormGroup>

            <Input type="text" name="email" id="userName" placeholder="Username" />
            </FormGroup>
          <FormGroup>

            <Input type="password" name="password" id="Password" placeholder="Password" />
          </FormGroup>
          <Button color="success" onClick={<Alert>belum ada fungsi</Alert>} >Masuk...</Button>
        </Form>
        </Container>
      </div>
    )
}
}
