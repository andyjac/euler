def largest_prime_factor(num)
  i = 1
  while i < num
    i += 1
    if num % i == 0 && i < num
      return largest_prime_factor(num / i)
    end
  end
  num
end
