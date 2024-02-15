
export const useDocSort = () => {
    
    type doc = { docId: string; chatRequest: string; chatResponse: string; type: string; date: string; name: string };
    type result = { today: doc[]; yesterday: doc[]; lastWeek: doc[]; lastMonth: doc[]; older: doc[] };

    const useSorter = (documents: doc[]) => {

        if (!Array.isArray(documents)) {
            console.error('Documents must be an array.');
            return null; // Or handle the error accordingly
        }

        const getCategoryKey = (diffDays: number) => {
            if (diffDays === 0) {
                return 'today';
            } else if (diffDays === 1) {
                return 'yesterday';
            } else if (diffDays <= 7) {
                return 'lastWeek';
            } else if (diffDays <= 30) {
                return 'lastMonth';
            }
            return 'older'; // Documents older than 30 days
        }

        const groupedDocuments: result = documents.reduce((result:result, document:doc) => {
            const currentDate = new Date();
            const diffTime = Math.abs(currentDate - new Date(document.date));
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
            const categoryKey = getCategoryKey(diffDays);
            result[categoryKey] = result[categoryKey] || [];
            result[categoryKey].push(document);
        
            return result;
        }, { today: [], yesterday: [], lastWeek: [], lastMonth: [], older: [] });

        return groupedDocuments;
    }

    return {
        useSorter
    }
}