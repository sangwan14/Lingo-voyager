from collections import defaultdict

for _ in range(int(input())):
    n = int(input())
    arr = list(map(int, input().split()))

    cnts = defaultdict(int)
    for num in arr:
        cnts[num] += 1

    s_vals = [k for k, v in cnts.items() if v >= 2]

    if len(s_vals) < 2:
        print(-1)
    else:
        res = []
        flag1, flag2 = False, False
        for num in arr:
            if num == s_vals[0]:
                res.append(1 if not flag1 else 2)
                flag1 = True
            elif num == s_vals[1]:
                res.append(1 if not flag2 else 3)
                flag2 = True
            else:
                res.append(1)

        print(*res)