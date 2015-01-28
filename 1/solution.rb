def divisible_by_3_and_5()
  result = 0

  (1..1000).each do |i|
    if i % 3 == 0 && i % 5 == 0
      result += i
    end
  end
  result
end
