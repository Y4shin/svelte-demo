export class H5PContent {
    src: string;
    width: string;
    height: string;
    frameborder: string;
    allowfullscreen: string;
    allow: string;
    title: string;

    constructor(src: string, width: string, height: string, frameborder: string, allowfullscreen: string, allow: string, title: string) {
        this.src = src;
        this.width = width;
        this.height = height;
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
    content: string;

    constructor(route: string, title: string, description: string, content: string) {
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
            new LessonUnit("1", "Klammerrechnung", "KlammerrechnungDesc", "<iframe style=\"width:100%;height:100%;\" src=\"https://h5p.org/h5p/embed/1275587\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\" allow=\"geolocation *; microphone *; camera *; midi *; encrypted-media *\" title=\"Klammerumformungen\"></iframe><script src=\"https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js\" charset=\"UTF-8\"></script>"),
            new LessonUnit("2", "Bruchrechnung", "BruchrechnungDesc", "<iframe style=\"width:100%;height:100%;\" src=\"https://h5p.org/h5p/embed/1275717\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\" allow=\"geolocation *; microphone *; camera *; midi *; encrypted-media *\" title=\"Bruchrechnung\"></iframe><script src=\"https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js\" charset=\"UTF-8\"></script>"),
            new LessonUnit("3", "Binomische Formeln", "Binomische FormelnDesc", "<iframe style=\"width:100%;height:100%;\" src=\"https://h5p.org/h5p/embed/1275718\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\" allow=\"geolocation *; microphone *; camera *; midi *; encrypted-media *\" title=\"Binomische Formeln\"></iframe><script src=\"https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js\" charset=\"UTF-8\"></script>"),
            new LessonUnit("4", "Polynomdivision", "PolynomdivisionDesc", "<iframe style=\"width:100%;height:100%;\" src=\"https://h5p.org/h5p/embed/1275728\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\" allow=\"geolocation *; microphone *; camera *; midi *; encrypted-media *\" title=\"Polynomdivision\"></iframe><script src=\"https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js\" charset=\"UTF-8\"></script>"),
            new LessonUnit("5", "Exponentialrechnung", "ExponentialrechnungDesc", "<iframe style=\"width:100%;height:100%;\" src=\"https://h5p.org/h5p/embed/1275749\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\" allow=\"geolocation *; microphone *; camera *; midi *; encrypted-media *\" title=\"Exponentialrechnung\"></iframe><script src=\"https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js\" charset=\"UTF-8\"></script>"),
            new LessonUnit("6", "(Un-)Gleichungen", "(Un-)GleichungenDesc", "<iframe style=\"width:100%;height:100%;\" src=\"https://h5p.org/h5p/embed/1276504\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\" allow=\"geolocation *; microphone *; camera *; midi *; encrypted-media *\" title=\"(Un-)Gleichungen\"></iframe><script src=\"https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js\" charset=\"UTF-8\"></script>")
        ])
    ])
];