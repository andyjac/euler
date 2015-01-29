def largest_palindrome_product(ceiling, floor)
  candidates, counter = {}, ceiling

  while counter > floor
    ceiling.downto(floor) do |i|
      product = i * counter

      if is_palindrome(product)
        candidates["#{i} * #{counter}"] = product
      end
    end
    counter -= 1
  end
  return find_largest(candidates)
end

def is_palindrome(num)
  reverse_num = num.to_s.reverse.to_i

  if num == reverse_num
    true
  else
    false
  end
end

def find_largest(candidates)
  largest = 0

  candidates.each do |key, value|
    if value > largest
      largest = value
    end
  end
  largest
end
