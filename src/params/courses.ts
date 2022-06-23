import { courses } from '$lib/study';


/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
    return courses.find((c) => c.route === param);
  }