import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {


  //pagination

  datas:any[]=[
    {name:"dheepan",gender:"Male",phone:"2334555"},
    {name:"Siva",gender:"Male",phone:"2334555"},
    {name:"adesh",gender:"Male",phone:"2334555"},
    {name:"Anbu",gender:"Male",phone:"2334555"},
    {name:"abu",gender:"Male",phone:"2334555"},
    {name:"Arvi",gender:"Male",phone:"2334555"},
    {name:"nithish",gender:"Male",phone:"2334555"},
    {name:"Alex",gender:"Male",phone:"2334555"},
  ];

  cardsPerPage = 3; // Number of cards per page
  currentPaginationPage = 1; // Current page number

  getCurrentDataPagination() {
    const startIndex = (this.currentPaginationPage - 1) * this.cardsPerPage;
    return this.datas.slice(startIndex, startIndex + this.cardsPerPage);
  }

  getPaginationCount() {
      var pageCount = Math.round(this.datas.length / this.cardsPerPage);
      var paginationCount =  new Array(pageCount);
      return paginationCount;
  }

  previewPage(index: number) {
      this.currentPaginationPage = index + 1; // Update currentPage
  }

  previous() {
      if (this.currentPaginationPage > 1) {
        this.currentPaginationPage--;
      }
  }
  
  next() {
    const pageCount = Math.round(this.datas.length / this.cardsPerPage);
    if (this.currentPaginationPage < pageCount) {
      this.currentPaginationPage++;
    }
  }




  //progress bar
  progress !: number;

  startProgress() {
    this.progress = 0;
    const interval = setInterval(() => {
      if (this.progress >= 100) {
        clearInterval(interval);
      } else {
        this.progress++;
      }
    }, 100); // Adjust the interval as needed
  }

  // using Js built progress bar
  // document.getElementById('start-button').addEventListener('click', function() {
  //   const progressBar = document.getElementById('progress-bar');
  //   let width = 0;
  //   const interval = setInterval(() => {
  //     if (width >= 100) {
  //       clearInterval(interval);
  //     } else {
  //       width++;
  //       progressBar.style.width = width + '%';
  //       progressBar.textContent = width + '%';
  //     }
  //   }, 100);
  // });


  //image slider
  currentPage = 0; // Current page number
  cards: any[] = [
    { title: "1" },
    { title: "2" },
    { title: "3" },
    { title: "4" }
  ];

  getPageNumbers() {
    return new Array(this.cards.length).fill(0).map((_, index) => index);
  }

  goToPage(index: number) {
    this.currentPage = index; // Update current page
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.cards.length - 1) {
      this.currentPage++;
    }
  }

  getCurrentPageCards() {
    return this.cards.slice(this.currentPage, this.currentPage + 1);
  }


  //stars

  stars: string[] = ['star', 'star', 'star', 'star', 'star'];
  rating: number = 0;
  hoveredRating: number = 0;

  setRating(rating: number): void {
    this.rating = rating;
  }

  highlightStars(rating: number): void {
    this.hoveredRating = rating;
  }

  clearHighlight(): void {
    this.hoveredRating = 0;
  }


  //todo 
  taskContent : string= "";
  editContent : string= "";
  editingCommentIndex :number | null = null;
  taskArray:any[]=[
    {status:"Task Incomplete",taskContent:"Hello to do my applaication here hwat should track my job"},
    {status:"Task Complete",taskContent:"Twomorrow we have meeting"},
    {status:"In Progress",taskContent:"To submitted application on bishop heber collage by 20-02-2023"},
    {status:"Task Created",taskContent:"Take medicine before going to bed"},

  ];

  checkboxChanges(event:any,task:any){
    console.log(task)
    if(event.checked){
      task.status = "Task Complete"
    }else if(!event.checked){
      task.status = "Task Incomplete"
    }
  }

  getStatusbgColor(value: string): string {
    switch (value) {
      case 'Task Incomplete':
        return '#f3f3f3'; // Background color for Task Incomplete
      case 'Task Complete':
        return '#e1fbee'; // Background color for Task Complete
      case 'In Progress':
        return '#f3f3f3'; // Background color for In Progress
        case 'Task Created':
          return '#e1fbee'; // Background color for Task Complete
      default:
        return 'gray'; // Default background color
    }
  }

  getStatusTextColor(value: string): string {
    // Optionally, define specific text colors or use a default one
    switch (value) {
      case 'Task Incomplete':
        return '#f76148'; // Text color for Task Incomplete
      case 'Task Complete':
        return '#21bb24'; // Text color for Task Complete
      case 'In Progress':
        return '#f76148'; // Text color for In Progress
        case 'Task Created':
          return '#21bb24'; // Background color for Task Complete
      default:
        return 'white'; // Default text color
    }
  }

  isTaskComplete(task: any): boolean {
    return task.status === 'Task Complete';
  }

  addTask(){
    if(this.taskContent === "") return;
   const addTaskDetails ={
    taskContent : this.taskContent,
    status:"Task Created"
   }
   this.taskArray.push(addTaskDetails);
   this.taskContent = ""
  }

  editTask(index:number){
   this.editingCommentIndex = index;
   const task= this.taskArray[index];
   if(task){
     this.editContent = task.taskContent
   }
  }

  saveTask(task:any){
    if(task){
       task.taskContent = this.editContent;
       task.status ="In Progress";
    }
   this.editingCommentIndex = null;
  }

  deleteTask(task:any){
    const deletedTaskIndex = this.taskArray.findIndex(val=>val == task);
     this.taskArray.splice(deletedTaskIndex,1)
  }

  isEditingComment(index:number){
    return this.editingCommentIndex ===index;
  }


  //tic tac toe 

  cells:any[]=["","","","","","","","",""];
  currentPlayer : string = 'x';
  winner !: string


  handleClick(index:number){
    if(!this.cells[index]){
      this.cells[index]= this.currentPlayer;
      this.calculateWinner();
      this.currentPlayer = this.currentPlayer ==='x' ? 'o' : 'x'
    }
  }

  private calculateWinner():void{

    const winPatterns = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,5,8],[2,5,6]
    ]

    for(let pattern of winPatterns){
      const [a, b, c] = pattern;
      if (this.cells[a] && this.cells[a] === this.cells[b] && this.cells[a] === this.cells[c]) {
        this.winner = this.cells[a] +  " wins";
        this.resetGame();
        return;
      }
      if (this.cells.every(cell => cell !== '')) {
        this.winner = 'Draw';
        this.resetGame();
      }
    }
  }

  resetGame(){
     this.cells= ["","","","","","","","",""];
     this.currentPlayer = 'x'
  }


  computerMove(): void {
    setTimeout(() => {
      if (!this.winner) {
        const emptyCells = this.cells.reduce((acc, cell, index) => {
          if (!cell) {
            acc.push(index);
          }
          return acc;
        }, [] as number[]);

        if (emptyCells.length) {
          const randomIndex = Math.floor(Math.random() * emptyCells.length);
          this.cells[emptyCells[randomIndex]] = 'O';
          this.calculateWinner();
          // this.userTurn = true;
        }
      }
    }, 1000);
  }




  // debounce 
  items: any[] = [];
  isLoading:boolean=false;
  debounceTimer:any

  constructor() {}

  ngOnInit(): void {
    this.loadItems();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {

    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }

    this.debounceTimer = setTimeout(() => {
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight && !this.isLoading) {
        // this.loadItems();
        console.log("load data from infinte scroll")
      }
    }, 500);
  }

  loadItems() {

  this.isLoading=true;

   setTimeout(() => {
    this.isLoading=false
    for(let i=0;i<10;i++){
      this.items.push(i)
    }
   }, 1000);

  }


  //auto complete 

  options:any[]=[{name:"Dheepan"},{name:"Arun"},
    {name:"Hemanth"},{name:"Nithish"},
    {name:"Navin"},{name:"Dhinesh"},
    {name:"Dheepan"},{name:"Muthu"}];
  debounceTime :any
  cloneOptionList = [...this.options]

  onInputSearch(value:string,event:any){
 
    if(this.debounceTime){
      clearInterval(this.debounceTime);
    }

    this.debounceTime=  setTimeout(() => {
      if(event.key == "Backspace" || value == ""){
        this.options = this.cloneOptionList
      }else{
        this.getUserDetails(value);
      }
    }, 1000);
  }

  private getUserDetails(searchValue:string):void{

    let searchText = searchValue.toLowerCase();
    this.options = this.options.filter(v=>v.name.toLowerCase().includes(searchText));
    
  }



  //modal pop using html css Js 

//   // Get the modal
// const modal = document.getElementById("myModal");

// // Get the button that opens the modal
// const btn = document.getElementById("openModalBtn");

// // Get the <span> element that closes the modal
// const span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal
// btn.onclick = function() {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
}
