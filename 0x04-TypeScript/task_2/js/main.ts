interface AdminInterface { 
    workFromHome: () => string;
    getCoffeeBreak?: () => string;
}

interface DirectorInterface extends AdminInterface { 
    workDirectorTasks: () => string;
}

interface TeacherInterface extends AdminInterface { 
    workTeacherTasks: () => string;

}

class Director implements DirectorInterface { 
    workFromHome(): string { 
        return "Working from home";
    }

    goToWork(): string { 
        return "Getting coffee break";
    }

    workDirectorTasks(): string { 
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface { 
    workFromHome(): string { 
        return "Cannot work from home";
    }

    getCoffeeBreak(): string { 
        return "Cannot have a break";
    }

    workTeacherTasks(): string { 
        return "Getting to work";
    }
}

type salaryType = number | string;

function createEmployee(salary: salaryType): string { 
    if (typeof salary !== 'number') { 
        if (salary.startsWith('$')) { 
            salary = salary.slice(1);
        }
        const salaryNumber = Number(salary);
    }
    const salaryNumber = Number(salary);
    if (salaryNumber < 500) { 
        return 'Teacher';
    } else if (salaryNumber >= 500) { 
        return 'Director';
    }
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));