type Documents = {
  title: string;
  text: string;
  data?: Date;
};

const documents: Documents = {
  title: 'The Wolf',
  text: 'Helloooooooo!',
  //ate: new Date(),
};

console.log(documents.data?.toDateString() ?? 'No Date');
