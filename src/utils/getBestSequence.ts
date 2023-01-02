import { SnackStorageDTO } from "@storage/snack/SnackStorageDTO";

export function getBestSequence(data: SnackStorageDTO[]) {
  let sequences: number[] = [];

  let counter = 0;

  for (let i = 0; i < data.length; i++) {
    if(data[i].type === 'inside') {
      counter = counter + 1;
    } else {
      sequences.push(counter);
      counter = 0;
    }

    if(i === data.length - 1 && counter !== 0) {
      sequences.push(counter);
    }
  }

  let orderSequences = sequences.sort((a, b) => b - a);
  
  return orderSequences[0];
}
