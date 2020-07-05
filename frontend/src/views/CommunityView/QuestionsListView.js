/*
 * This view will show the list of questions in the community
 */
import React, {Component} from "react";
import Question from "../../components/Question";
import Grid from "@material-ui/core/Grid";
import QuestionService from "../../services/QuestionService";

class QuestionListView extends Component {
    // Contructor
    constructor(props) {
    super(props);

        this.state = {
            loading: false,
            questions: []
        };
    }
     // Load data
  componentWillMount(){
    this.setState({
        loading: true
    });

    QuestionService.getQuestions().then((questions) => {
        this.setState({
            questions: [...questions],
            loading: false
        });
    }).catch((e) => {
        console.error(e);
    });
}

  // Render
  render() {
    if (this.state.loading) {
        return (<h2>Loading...</h2>);
    }
    return (
      <React.Fragment>
        <Grid container justify="center" spacing={5}>
          {this.state.questions.map((question) => (
            <Grid key={question.title} item>
              <Question
                questn={question}
              />
            </Grid>
          ))}
        </Grid>
      </React.Fragment> 
    );
  }
};

export default QuestionListView;


