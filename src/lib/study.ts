export class H5PContent {
    src: string;
    frameborder: string;
    allowfullscreen: string;
    allow: string;
    title: string;

    constructor(src: string, frameborder: string, allowfullscreen: string, allow: string, title: string) {
        this.src = src;
        this.frameborder = frameborder;
        this.allowfullscreen = allowfullscreen;
        this.allow = allow;
        this.title = title;
    }
}


export class LessonUnit {
    route: string;
    title: string;
    description: string;
    content: H5PContent;

    constructor(route: string, title: string, description: string, content: H5PContent) {
        this.route = route;
        this.title = title;
        this.description = description;
        this.content = content;
    }
}

export class CourseLesson {
    route: string;
    title: string;
    description: string;
    units: LessonUnit[];

    constructor(route: string, title: string, description: string, units: LessonUnit[]) {
        this.route = route;
        this.title = title;
        this.description = description;
        this.units = units;
    }
}

export class Course {
    name: string;
    description: string;
    route: string;
    lessons: CourseLesson[];

    constructor(route: string, name: string, description: string, lessons: CourseLesson[]) {
        this.name = name;
        this.description = description;
        this.route = route;
        this.lessons = lessons;
    }
}

export const courses: Course[] = [
    new Course("study", "Studie", "Dies ist der Kurs für die Studie.", [
        new CourseLesson("1", "Elementare Rechentechniken", "In dieser Lektion kannst du dein Können über Elementare Rechentechniken prüfen.", [
            new LessonUnit("1", "Klammerrechnung", "Diese Lerneinheit befasst sich mit elementaren Termumformungen. Hier wird sich auf Klammerumformungen beschränkt.", new H5PContent("https://h5p.org/h5p/embed/1275587", "0", "allowfullscreen", "geolocation *; microphone *; camera *; midi *; encrypted-media *", "Klammerumformungen")),
            new LessonUnit("2", "Bruchrechnung", "Diese Lerneinheit erweitert die Klammerrechnung um die Bruchrechnung und wie Bruchterme umgeformt werden können.", new H5PContent("https://h5p.org/h5p/embed/1275717", "0", "allowfullscreen", "geolocation *; microphone *; camera *; midi *; encrypted-media *", "Bruchrechnung")),
            new LessonUnit("3", "Binomische Formeln", "Diese Lerneinheit erweitert die Bruch- und Klammerrechnung um die Binomischen Formelun und wie diese in beide Richtungen angewendet werden.", new H5PContent("https://h5p.org/h5p/embed/1275718", "0", "allowfullscreen", "geolocation *; microphone *; camera *; midi *; encrypted-media *", "Binomische Formeln")),
            new LessonUnit("4", "Polynomdivision", "Diese Lerneinheit befasst sich mit der Polynomdivision, der Ähnlichkeit zur schriftlichen Division und wie Polynomdivision funktioniert.", new H5PContent("https://h5p.org/h5p/embed/1275728", "0", "allowfullscreen", "geolocation *; microphone *; camera *; midi *; encrypted-media *", "Polynomdivision")),
            new LessonUnit("5", "Exponentialrechnung", "Diese Lerneinheit befasst sich mit der Exponentialrechnung, sowie der Wurzel- und Logarithmusrechnung. Hierbei wird auch auf die Umformungsregeln der Exponential-, Wurzel- und Logarithmusrechnung eingegangen.", new H5PContent("https://h5p.org/h5p/embed/1275749", "0", "allowfullscreen", "geolocation *; microphone *; camera *; midi *; encrypted-media *", "Exponentialrechnung")),
            new LessonUnit("6", "(Un-)Gleichungen", "Diese Lerneinheit befasst sich mit Gleichungen und Ungleichungen und wie diese umgeformt werden können.", new H5PContent("https://h5p.org/h5p/embed/1276504", "0", "allowfullscreen", "geolocation *; microphone *; camera *; midi *; encrypted-media *", "(Un-)Gleichungen"))
        ])
    ])
];