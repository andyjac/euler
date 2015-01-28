fib_list = [1, 2]

def populate_fib_list(fib_list)
  next_num = fib_list[-1] + fib_list[-2]

  unless next_num > 4000000
    fib_list.push(next_num)
    populate_fib_list(fib_list)
  end
  even_num_sum_finder(fib_list)
end

def even_num_sum_finder(fib_list)
  sum = 0

  fib_list.each do |i|
    if i % 2 == 0
      sum += i
    end
  end
  sum
end
