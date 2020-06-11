import React , { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

class QuestionForm extends Component {
    // handleSubmit = () => {
    // }

    // handleInputChange = () => {
    // }

    render() {
        return (
            <React.Fragment>
                <Typography variant="h5" gutterBottom>
                    Ask a question
                </Typography>
                <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                    required
                    id="questionTitle"
                    name="questionTitle"
                    label="Question title"
                    fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}></Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                    required
                    id="areas"
                    name="areas"
                    label="Areas"
                    fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}></Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                    required
                    id="questionContent"
                    name="questionContent"
                    label="Content"
                    fullWidth
                    />
                </Grid>
            </Grid>
            <CardActions style={{justifyContent: 'center'}}>
                <Button variant="contained" color="primary">
                    Submit
                </Button>
                </CardActions>
            </React.Fragment>
        )
    }
}
export default QuestionForm;
