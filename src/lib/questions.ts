export enum TextType {
    Text,
    LaTeX
}

export class TextComponent {
    text: string;
    type: TextType;

    constructor(text: string, type: TextType) {
        this.text = text;
        this.type = type;
    }
}


export class Text {
    text: TextComponent[];
    equation: string;
    isEquation: boolean;

    constructor(text: TextComponent[], equation: string, isEquation: boolean) {
        this.text = text;
        this.equation = equation;
        this.isEquation = isEquation;
    }
}

export function createText(text: TextComponent[]): Text {
    return new Text(text, "", false);
}

export function createEquation(equation: string): Text {
    return new Text([], equation, true);
}

export enum AssistanceType {
    None,
    Solution,
    Hint
}

export class QuestionConfig {
    showSolution: boolean;
    showDetails: boolean;
    assistance: AssistanceType;


    constructor(showSolution: boolean, showDetails: boolean, assistance: AssistanceType) {
        this.showSolution = showSolution;
        this.showDetails = showDetails;
        this.assistance = assistance;
    }
}

export class SingleChoiceQuestion {
    title: string;
    question: Text[];
    answers: Text[];
    correctAnswer: number;
    config: QuestionConfig;

    constructor(title: string, question: Text[], answers: Text[], correctAnswer: number, config: QuestionConfig) {
        this.title = title;
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.config = config;
        if (correctAnswer < 0 || correctAnswer >= answers.length) {
            throw new Error(`Correct answer must be between 0 and answers.length - 1, but was ${correctAnswer}`);
        }
    }
}