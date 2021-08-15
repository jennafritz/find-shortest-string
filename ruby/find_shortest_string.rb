def find_shortest_string(arr)
  # type your code in here

  array_of_lengths = arr.map do |string|
    string.length
  end

  shortest = array_of_lengths.min

  shortest_index = array_of_lengths.index(shortest)

  arr[shortest_index]

end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'a'"
  puts "=>", find_shortest_string(['aaa', 'a', 'bb', 'ccc'])

  puts "Expecting: 'this'"
  puts "=>", find_shortest_string(['hopefully', 'this', 'works', 'properly'])

  puts "Expecting: 'hi'"
  puts "=>", find_shortest_string(['cat', 'hi', 'dog', 'an'])

  puts "Expecting: 'my'"
  puts "=>", find_shortest_string(['my', 'fingers', 'are', 'crossed'])

  puts "Expecting: 'lily'"
  puts "=>", find_shortest_string(['flower', 'juniper', 'lily', 'dadelion'])

  # Don't forget to add your own!

  # BENCHMARK HERE
end

# Please add your pseudocode to this file
# And a written explanation of your solution
