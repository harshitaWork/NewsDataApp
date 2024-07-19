import { connect } from 'react-redux';
import { getUser } from '../actions/actions';
import LoginComponent from '../components/LoginComponent';

handleSubmit = () => {
    const { user } = this.state;
    this.props.onLogin({ user }); 
}

render(
<View style={styles.container}>
        <Text h4>NewsData</Text>
        <FormLabel>User Name</FormLabel>
        <FormInput
          onChangeText={text => this.setState({ userName: text })}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          onChangeText={text => this.setState({ password: text })}
        />
        <Button
          onPress={this.handleSubmit}
          buttonStyle={[{ marginBottom: 5, marginTop: 5 }]}
          title="Login"
        />
</View>
);

 mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  onLogin: (user) => {
    dispatch(getUser(user));
  },
});

const LoginContainer = connect(
mapStateToProps, 
mapDispatchToProps)
(LoginComponent);

export default LoginContainer;