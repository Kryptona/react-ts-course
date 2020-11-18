import { getCorrectStr, isCorrectStr} from "../lesson2/parser";

test("string asdf12+1;1 equal 12+11", () => {
    expect(getCorrectStr("asdf12+1;1")).toBe("12+11");
});


