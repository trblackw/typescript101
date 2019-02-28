const isOpen: boolean = false;
const firstname: string = 'Tucker';
const myAge: number = 32;
const list: number[] = [0, 1, 2, 3];
const me: [string, number] = ['scott', 32];
enum Job {
	WebDev,
	WebDesigner,
	PM
}
const job: Job = Job.WebDev;
const phone: any = 'Scott';
const tablet: any = '3';

const sayWord = (word = 'Hello'): string => {
	return word;
};

let newName = "scott";

newName = "Wes";
newName = 10;