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
        let qsts = [...questions]
        let revqsts = qsts.reverse();
        this.setState({
            questions: [...revqsts],
            loading: false
        });
    }).catch((e) => {
        console.error(e);
    });
}

  // Render
  render() {
    const stringSimilarity = require('string-similarity');
    if (this.state.loading) {
        return (<h2>Loading...</h2>);
    }
    let questionsToShow = this.state.questions;
    if(this.props.search != "") {
      let result = stringSimilarity.findBestMatch(this.props.search, questionsToShow.map(question => question.title))
      
      result = result.ratings.filter(question => question.rating > 0.05)
      
      const qstn = [].concat(result).sort((a, b) => a.rating < b.rating ? 1 : -1)
    
      questionsToShow = qstn
    } else {
      questionsToShow = this.state.questions;
    }
    return (
      <React.Fragment>
        <Grid container justify="center" spacing={5}>
          {questionsToShow.map((question) => (
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


