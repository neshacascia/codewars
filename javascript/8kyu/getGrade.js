// Grasshopper - Grade book
// Complete the function so that it finds the average of the three
// scores passed to it and returns the letter value associated with that grade.

function getGrade(s1, s2, s3) {
  const average = (s1 + s2 + s3) / 3;

  if (average >= 90) {
    return 'A';
  } else if (average >= 80) {
    return 'B';
  } else if (average >= 70) {
    return 'C';
  } else if (average >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}
