export default class ArrayUtils {
    static chunkArray(array, size) {
        const copy = array.concat();
        const chunks = [];
        
        while (copy.length) {
            chunks.push( copy.splice(0, size));
        }
        
        return chunks;
    }
}