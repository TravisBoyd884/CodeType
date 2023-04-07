export const javaTextArray: string[] = [];

javaTextArray.push(`public void givenMap_whenSortingByKeys_thenSortedMap() {~
    Integer[] sortedKeys = new Integer[] { 6, 12, 22, 55, 66, 77 };~
~
    List<Map.Entry<Integer, String>> entries ~
      = new ArrayList<>(map.entrySet());~
    Collections.sort(entries, new Comparator<Entry<Integer, String>>() {~
        @Override~
        public int compare(~
          Entry<Integer, String> o1, Entry<Integer, String> o2) {~
            return o1.getKey().compareTo(o2.getKey());~
        }~
    });~
    Map<Integer, String> sortedMap = new LinkedHashMap<>();~
    for (Map.Entry<Integer, String> entry : entries) {~
        sortedMap.put(entry.getKey(), entry.getValue());~
    }~
        ~
    assertTrue(Arrays.equals(sortedMap.keySet().toArray(), sortedKeys));~
}~
`)
