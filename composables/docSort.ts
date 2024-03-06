
export const useDocSort = () => {
    
    type doc = { docId: string; chatRequest: string; chatResponse: string; type: string; date: string; name: string };
    type result = { today: doc[]; yesterday: doc[]; lastWeek: doc[]; lastMonth: doc[]; older: doc[] };

    const useSorter = (documents: doc[]) => {

        if (!Array.isArray(documents)) {
            console.error('Documents must be an array.');
            return null; // Or handle the error accordingly
        }

        const today = new Date();
         today.setHours(0, 0, 0, 0); // Set time to midnight
        const yesterday = new Date(today);
         yesterday.setDate(yesterday.getDate() - 1);
         yesterday.setHours(0, 0, 0, 0); // Set time to midnight of yesterday
        const lastWeek = new Date(today);
        lastWeek.setDate(lastWeek.getDate() - 7);
        const lastMonth = new Date(today);
        lastMonth.setMonth(lastMonth.getMonth() - 1);

        const categorizedDocuments = {
            today: <doc[]>[],
            yesterday: <doc[]>[],
            lastWeek: <doc[]>[],
            lastMonth: <doc[]>[],
            older: <doc[]>[]
        };

        documents.forEach(doc => {
            const docDate = new Date(doc.date);
            if (docDate >= today) {
              categorizedDocuments.today.push(doc);
            } else if (docDate >= yesterday && docDate < today) {
              categorizedDocuments.yesterday.push(doc);
            } else if (docDate >= lastWeek && docDate < yesterday) {
              categorizedDocuments.lastWeek.push(doc);
            } else if (docDate >= lastMonth && docDate < lastWeek) {
              categorizedDocuments.lastMonth.push(doc);
            } else {
              categorizedDocuments.older.push(doc);
            }
          });
        
          return categorizedDocuments;
        

        // if (!Array.isArray(documents)) {
        //     console.error('Documents must be an array.');
        //     return null; // Or handle the error accordingly
        // }

        // const getCategoryKey = (diffDays: number) => {
        //     if (diffDays === 0) {
        //         return 'today';
        //     } else if (diffDays === 1) {
        //         return 'yesterday';
        //     } else if (diffDays <= 7) {
        //         return 'lastWeek';
        //     } else if (diffDays <= 30) {
        //         return 'lastMonth';
        //     }
        //     return 'older'; // Documents older than 30 days
        // }

        // const groupedDocuments: result = documents.reduce((result:result, document:doc) => {
        //     const currentDate = new Date();
        //     const diffTime = Math.abs(currentDate - new Date(document.date));
        //     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        //     const categoryKey = getCategoryKey(diffDays);
        //     result[categoryKey] = result[categoryKey] || [];
        //     result[categoryKey].push(document);
        
        //     return result;
        // }, { today: [], yesterday: [], lastWeek: [], lastMonth: [], older: [] });

        // return groupedDocuments;
    }

    return {
        useSorter
    }
}